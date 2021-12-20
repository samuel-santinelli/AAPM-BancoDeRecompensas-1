class Banner {
    /**
     * @type {HTMLElement} 
     */
    main;
    x = 0;

    /**
     * @param {HTMLElement} banner 
     */
    constructor(banner) {
        /**
         * @type {HTMLElement}
         */
        this.main = banner
        this.length = banner.childElementCount
        
        
        this.container = document.createElement('div');
        this.container.style.position = "relative";
        this.container.append(...banner.children);
        this.container.style.transform =  "translateX(0px)";

        banner.append(this.container);
    }
    moveBy(x) {
        this.x += x;
        this.container.style.transform = `translateX(${this.x}px)`;
    }
    moveTo(x) {
        this.x = x;
        this.container.style.transform = `translateX(${x}px)`;
    }

	/**
     * @param {Object} css 
     */
	setCSS(css){
		Object.entries(css).forEach( entry => this.container.style[entry[0]] = entry[1])
		console.log(this.container.style)
	}
}

class ImageBanner extends Banner{
    atual = 0;
    
    /**
     * @param {HTMLElement} banner 
     */
    constructor(banner){
        super(banner)

        this.container.style.width = `${100 * this.length}%`
        this.container.style.height = `100%`

        this.container.childNodes.forEach( e => {
            e.style.width = `${100 / this.length}%`
            e.style.height = 'inherit'
        })

		window.addEventListener("resize", () => this.moveTo(this.atual * this.main.offsetWidth * -1))
    }
    
    canMoveLeft(){
        return this.atual > 0;
    }
    
    canMoveRight(){
        return this.atual < (this.length - 1);
    }
    
    moveRight(){
        if(this.canMoveRight()){
            this.moveBy(this.main.offsetWidth * -1)
            this.atual++;
        }
    }
    
    moveLeft(){
        if(this.canMoveLeft()){
            this.moveBy(this.main.offsetWidth)
            this.atual--;
        }
    }
    
    moveRightOrBeggining(){
        if(this.canMoveRight()){
            this.moveBy(this.main.offsetWidth * -1)
            this.atual++;
        }
        else{
            this.moveTo(0);
            this.atual = 0;
        }
    }
    
    moveLeftOrEnd(){
        if(this.canMoveLeft()){
            this.moveBy(this.main.offsetWidth)
            this.atual--;
        }
        else{
            this.moveBy(this.main.offsetWidth * (this.length - 1) * -1)
            this.atual = (this.length - 1)
        }
            
    }
}

class PromisedImageBanner extends ImageBanner{
    constructor(banner){
        super (banner);
		this.locked = false;
    }
    
    /**
     * @param {number} msToWait 
     * @returns {Promise<PromisedImageBanner>}
     */
    waitAndMoveLeft(msToWait){
        return new Promise( exit => {
			if(!this.locked){
            	this.moveLeftOrEnd();
				this.lock()
			
				
				setTimeout( () => {
					this.unlock()
					exit(this)
				}, msToWait);
			}
        })
    }

    /**
     * @param {number} msToWait 
     * @returns {Promise<PromisedImageBanner>}
     */
	waitAndMoveRight(msToWait){
        return new Promise( exit => {
			if(!this.locked){
            	this.moveRightOrBeggining();
				this.lock()

				setTimeout( () => {
					this.unlock()
					exit(this)
				}, msToWait);
			}

        })
    }

	lock(){
		this.locked = true;
	}

	unlock(){
		this.locked = false;
	}
}

export {Banner, ImageBanner, PromisedImageBanner};