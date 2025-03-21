'use strict'

const isWin = process.platform === 'win32';
let dirname = __dirname;

if (isWin == true) {
    dirname = dirname.replace(/\\/g, '/');
}

exports.decorateConfig = (config) => {
    const pluginConfig = Object.assign({
        flipped: true,
    }, config.hyperKaliControls);

    const windowControls = config.showWindowControls;

    if (windowControls === false) {
        return config;
    }

    let isLeft = windowControls === 'left';

    return Object.assign({}, config, {
        css: `
            ${config.css || ''}
            .header_windowHeader {
                height: 22px;
                left: ${isLeft ? '57px' : '0'};
                width: calc(100% - 56px);
            }
            .header_windowControls {
                display: none;
            }
            .header_appTitle {
                margin-left: -56px;
            }
            .kali_header {
                position: fixed;
                top: 0;
                ${isLeft ? 'left: 0;' : 'right: 0;'}
                height: 22px;
                width: 56px;
            }
            .kali_actions {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
            }
            .kali_header .kali_close,
            .kali_header .kali_minimize,
            .kali_header .kali_maximize {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                position: absolute;
                top: 5px;
                background-position: -6px;
            }
            .kali_header .kali_close {
                background-color: #f25056;
                background-image: url('${dirname}/icons/close.svg');
                left: ${pluginConfig.flipped ? '5px' : '40px'};
            }
            .kali_header .kali_close:hover {
                background-image: url('${dirname}/icons/close_hover.svg');
            }
            .kali_header .kali_minimize {
                background-color: #fac536;
                background-image: url('${dirname}/icons/minimize.svg');
                left: 23px;
            }
            .kali_header .kali_minimize:hover {
                background-image: url('${dirname}/icons/minimize_hover.svg');
            }
            .kali_header .kali_maximize {
                background-color: #39ea49;
                background-image: url('${dirname}/icons/maximize.svg');
                left: ${pluginConfig.flipped ? '40px' : '5px'};
            }
            .kali_header .kali_maximize:hover {
                background-image: url('${dirname}/icons/maximize_hover.svg');
            }
        `
    })
};

exports.decorateHeader = (Hyper, { React }) => {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                maximized: false
            }

            this.props = props;
            this.maximizeApp = this.maximizeApp.bind(this);
        }

        maximizeApp() {
            if (this.state.maximized == true) {
                this.props.unmaximize()
                this.state.maximized = false;
            } else {
                this.props.maximize()
                this.state.maximized = true;
            }
        }

        render() {
            return (
                React.createElement(Hyper, Object.assign({}, this.props, {
                    customChildren: React.createElement('div', { className: 'kali_header' },
                        React.createElement('div', { className: 'kali_actions' },
                            React.createElement('span', { className: 'kali_close', onClick: this.props.close }),
                            React.createElement('span', { className: 'kali_minimize', onClick: this.props.minimize }),
                            React.createElement('span', { className: 'kali_maximize', onClick: this.maximizeApp })
                        )
                    ),
                }))
            )
        }
    };
};
