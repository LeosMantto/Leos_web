export class Leos {
    url_base = 'http://localhost:3033';

    async get_usuarios () {
        return  new  Promise( async (resolve, reject) => {
            await fetch(this.url_base + '/usr/sgm').then( (json) => {
                return json.json();
            }).then( result => {
                return resolve(result);
            }).catch( err => {
                return reject(err);
            });
        });  
    };

    async get_count_usuarios () {
        return  new  Promise( async (resolve, reject) => {
            await fetch(this.url_base + '/usr/count_usr').then( (json) => {
                return json.json();
            }).then( result => {
                return resolve(result);
            }).catch( err => {
                return reject(err);
            });
        }); 
    };

    async get_search_usuario (value) {
        const response = await fetch(`${this.url_base}/usr/search/${value}`);
        const data = await response.json();
        return data;
    };
};

