class YandexAds {
    constructor() {
        // Инициализируем SDK при создании экземпляра
        this.ysdk = null;
        YaGames.init().then(ysdk => {
            this.ysdk = ysdk;
        });
    }

    getInfo() {
        return {
            id: 'yandexadvertising',
            name: 'Яндекс Реклама',
            blocks: [
                {
                    opcode: 'showAd',
                    blockType: 'command',
                    text: 'показать рекламу'
                }
            ]
        };
    }

    showAd() {
        return new Promise((resolve) => {
            if (this.ysdk) {
                this.ysdk.adv.showFullscreenAdv({
                    callbacks: {
                        onClose: () => {
                            resolve();
                        },
                        onError: () => {
                            resolve();
                        }
                    }
                });
            } else {
                resolve();
            }
        });
    }
}

Scratch.extensions.register(new YandexAds());
