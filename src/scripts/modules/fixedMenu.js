import throttle from 'lodash.throttle';

class fixedMenu
{
	constructor (props)
	{
		this._items = props.fixedItemsEnum;
		
		this.setEventListeners();
		this._toggleClasses();
	}
	
	_checkScroll ()
	{
		let scrollY = window.pageYOffset || document.documentElement.scrollTop;
		const getNewHeight = this._items.MAIN_WRAPPER.offsetHeight;
		
		return scrollY > getNewHeight;
	}
	
	_toggleClasses ()
	{
		let key;
		if (this._checkScroll() === true)
		{
			for (key in this._items)
			{
				this._items[key].classList.add(`js-isFixed`);
			}
			window.headerIsFixed = true;
		}
		else
		{
			for (key in this._items)
			{
				this._items[key].classList.remove(`js-isFixed`);
			}
			
			window.headerIsFixed = false;
		}
	}
	
	setEventListeners ()
	{
		document.addEventListener('scroll', throttle(() =>
		{
			this._toggleClasses();
		}, 100));
	}
}

export default fixedMenu;
