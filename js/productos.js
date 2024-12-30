document.addEventListener('DOMContentLoaded', function() {
    class Album {
        constructor(id, title, price, imageUrl, pageUrl, isPreorder = false) {
            this.id = id;
            this.title = title;
            this.price = price;
            this.imageUrl = imageUrl;
            this.pageUrl = pageUrl;
            this.isPreorder = isPreorder;
        }

        displayInfo() {
            return `ID: ${this.id} | ${this.isPreorder ? '[PRE-ORDER] ' : ''}${this.title} | Precio: $${this.price}`;
        }
    }

    // Lista de álbumes
    const albumsData = [
        {
            title: "VIVIZ - VOYAGE (QR Ver.)",
            price: 9.89,
            imageUrl: "./assets/img/new-albums/vivizvoyageqr.jpg",
            pageUrl: "./page/vivizvoyageqr.html"
        },
        {
            title: "VIVIZ - VOYAGE (PB Ver.)",
            price: 15.89,
            imageUrl: "./assets/img/new-albums/voyagepb.png",
            pageUrl: "./page/vivizvoyagepb.html"
        },
        {
            title: "KEP1ER - 6th Mini Album: TIPI-TAP",
            price: 12.98,
            imageUrl: "./assets/img/new-albums/tipitappb.jpg",
            pageUrl: "./page/tipitap.html"
        },
        {
            title: "TWICE - STRATEGY (RANDOM Ver.)",
            price: 22.22,
            imageUrl: "./assets/img/new-albums/strategypb.jpg",
            pageUrl: "./page/twicestrategy.html",
            isPreorder: true
        }
    ];

    function generateAlbumsList() {
        console.log("=== LISTA DE ÁLBUMES DISPONIBLES ===\n");
        
        const albums = albumsData.map((item, index) => 
            new Album(
                index + 1,
                item.title,
                item.price,
                item.imageUrl,
                item.pageUrl,
                item.isPreorder
            )
        );

        albums.forEach(album => {
            console.log(album.displayInfo());
        });
    }

    // Ejecutar
    generateAlbumsList();
});