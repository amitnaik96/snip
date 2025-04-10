export class UrlManager {
    urlMap : Map<string, string>;
    private static instance: UrlManager;

    private constructor(){
        this.urlMap = new Map();
    }

    static getInstance(){
        if(!UrlManager.instance){
            UrlManager.instance = new UrlManager();
        }
        return UrlManager.instance;
    }

    getSnip(url: string){
        return this.urlMap.get(url);
    }

    setSnip(url: string, snip: string){
        this.urlMap.set(url, snip);
    }
}