import { gsap } from 'gsap';
import axios from 'axios';

require('es6-promise').polyfill();

class Popup {

	constructor(element) {
		this.el = element;
		this.body = this.el.querySelector('.js-popupBody');
		this.closeEl = this.el.querySelector('.js-popupClose');
		this.wrap = this.el.querySelector('.js-popupWrap');
		this.overlay = this.el.querySelector('.js-popupWatch');
		this.id = this.el.getAttribute('data-modal');

		this.ajaxLoader = this.el.querySelector('.popup-loader');
		this.ajaxContainer = this.el.querySelector('.popup-target');

		this.opened = false;
		this.loaded = false;

		this.opTimeLine = this.timeline();

		this.closeEl.addEventListener('click', (e) => {
			e.preventDefault();
			this.close();
		});

		this.overlay.addEventListener('click', (e) => {
			let target = e.target;
			if (this.opened) {
				if (target !== this.body && target === this.overlay) {
					this.close();
				}
			}
		});
	}

	/**
	 *
	 * @returns {gsap.core.Tween}
	 */
	timeline() {
		return gsap.fromTo(this.el, {
			alpha: 0
		}, {
			duration: .3,
			alpha: 1,
			paused: true,
			onStart: () => {
				this.el.style.display = 'flex';
			},
			onComplete: () => {
				this.opened = true;
			},
			onReverseComplete: () => {
				this.el.style.display = 'none';
				this.opened = false;
			}
		});
	}

	nodeScriptReplace(node) {
		if (node.tagName === 'SCRIPT') {
			node.parentNode.replaceChild(this.nodeScriptClone(node), node)
		} else {
			node.childNodes.forEach((child) => {
				this.nodeScriptReplace(child);
			})
		}

		return node;
	}

	nodeScriptClone(node) {
		let script = document.createElement('script');
		script.text = node.innerHTML;

		if (node.attributes.length > 0) {
			Array.from(node.attributes).forEach((attribute) => {
				script.setAttribute(attribute.name, attribute.value);
			})
		}

		return script;
	}


	/**
	 *
	 */
	showAjaxContainer() {
		this.ajaxLoader.style.display = 'none';
		this.ajaxContainer.style.display = 'block';
	}

	/**
	 *
	 */
	hideAjaxContainer() {
		this.ajaxLoader.style.display = 'block';
		this.ajaxContainer.style.display = 'none';
	}

	/**
	 * Закрытие модального окна, бабл эвента
	 */
	close() {
		this.opTimeLine.reverse();
		this.el.dispatchEvent(new Event('close'));
	}

	open(link, modifier) {
		this.el.className = '';
		this.el.classList.add('popup');
		if (modifier) {
			this.el.classList.add(`popup_${modifier}`);
		}
		this.hideAjaxContainer();
		this.opTimeLine.play();
		axios
			.get(link)
			.then((response) => {
				this.ajaxContainer.innerHTML = response.data;
				setTimeout(() => {
					this.nodeScriptReplace(this.ajaxContainer);
					this.showAjaxContainer();
				}, 1000);
			})
			.catch((error) => {
				console.log(error);
			});

	}

}

export default Popup;
