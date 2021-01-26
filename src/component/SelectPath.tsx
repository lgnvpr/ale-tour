
import React from "react";
import {BiTargetLock} from "react-icons/bi"

type Props = {
	onPathClick?: (path?: string) => void;
	onPathMouseOut ?: (path?: string) => void;
	onPathMouseOver ?: (path?: string)=>void
    isSelectPath ?: boolean
	buttonSelectPath?: React.ReactElement;
	styleButton?: React.CSSProperties;
	notSelectedById?: string[];// prettier-disable
	notSelectedByClassName?: string[];
	notSelectedByTagName?: string[];
	notSelectedByAttribute ?: string[];
	notSelectedChillById?: string[];
	notSelectedChillByClassName?: string[];
	notSelectedChillByTagName?: string[];
	notSelectedChillByAttribute ?: string[];
	
};
export default function SelectPath(props: Props) {


	function isSelected(element: HTMLElement):boolean{
		// prettier-disable

		if(props.isSelectPath){ // prettier-ignore
			if(props.notSelectedById && props.notSelectedById?.find(id=> id=== element.id)){
				return false
			}
			if(props.notSelectedByTagName && props.notSelectedByTagName?.find(tagName=> tagName?.toUpperCase()=== element.tagName.toUpperCase())){
				return false
			}
			if(props.notSelectedByAttribute){
				for (let index = 0, length = props.notSelectedByAttribute.length; index < length; index++) {
					if(element.getAttribute(props.notSelectedByAttribute[index])){
						return false
					}
				}
			}
			if(props.notSelectedByClassName){
				for (let index = 0, length = element.classList.length; index < length; index++) {
					if(props.notSelectedByClassName?.find(className=> className.toString() === element.classList[index].toString())){
						return false
					}
				}
			}

			if(props.notSelectedChillById){
				return !checkExitIdParent(element,props.notSelectedChillById);
			}
			if(props.notSelectedChillByTagName){
				return !checkExitTagNameParent(element, props.notSelectedChillByTagName);
			}
			if(props.notSelectedChillByAttribute){
				return !checkExitAttributeParent(element, props.notSelectedChillByAttribute);
			}	
			if(props.notSelectedChillByClassName){
				return !checkExitClassNameParent(element, props.notSelectedChillByClassName);
			}
			return true;
		}
		return false;
		// prettier-enable

	}

	function checkExitClassNameParent(element: HTMLElement, className : string[]):boolean{
		for (let index = 0, length = element.classList.length; index < length; index++) {
			if(className?.find(name=> name.toString() === element.classList[index].toString())){
				return true
			}
		}
		if(element.parentElement){
			return  checkExitClassNameParent(element.parentElement, className);
		}else{
			return false;
		}
	}

	function checkExitAttributeParent(element: HTMLElement, nameAttribute : string[]):boolean{
		for (let index = 0, length = nameAttribute.length; index < length; index++) {
			if(element.getAttribute(nameAttribute[index])){
				return true
			}
		}
		if(element.parentElement){
			return  checkExitAttributeParent(element.parentElement, nameAttribute);
		}else{
			return false;
		}
	}

	function checkExitTagNameParent(element: HTMLElement, tagName : string[]):boolean{
		if(tagName.find(tagName=> tagName.toUpperCase()=== element.tagName.toUpperCase())){
			return true;
		}
		if(element.parentElement){
			return  checkExitTagNameParent(element.parentElement, tagName);
		}else{
			return false;
		}
	}

	function checkExitIdParent(element: HTMLElement, id : string[]):boolean{
		if(id.find(id=> id=== element.id)){
			return true;
		}
		if(element.parentElement){
			return  checkExitIdParent(element.parentElement, id);
		}else{
			return false;
		}
	}

	document.onclick = (e) => {
		const element: HTMLElement = e.target as any;
		if (isSelected(element)) {
            const path = getDomPath(element);
            if(props.onPathClick){
                props.onPathClick(path);
            }
			const getMyDiv: NodeListOf<HTMLElement> = document.querySelectorAll("aleDiv-3660e472-b05a-409a-a9c0-ce209106cfe0");
			for(let i =0, length = getMyDiv.length; i< length; i++){
				element.style.background = `${getMyDiv[i].style.background}`;
				element.style.cursor = `${getMyDiv[i]?.style.cursor}`;
				getMyDiv[i]?.remove();	
			}
			
		}
	};

	document.onmouseout = (e) => {
		const element: HTMLElement = e.target as any;
		const getMyDiv = document.getElementById("aleDiv-3660e472-b05a-409a-a9c0-ce209106cfe0");
		element.style.background = `${getMyDiv?.style.background}`;
		element.style.cursor = `${getMyDiv?.style.cursor}`;
		getMyDiv?.remove();
		if (props.onPathMouseOut && isSelected(element)) {
			const path = getDomPath(element);
			props.onPathMouseOut(path);
		}
	};


	document.onmouseover = (e) => {
		const element: HTMLElement = e.target as any;
		if (isSelected(element)) {
			if (element) {
				var myDiv = document.createElement("div");
				myDiv.style.position = "absolute";
				myDiv.style.left = `0px`;
				myDiv.style.top = `0px`;
				myDiv.style.height = `100%`;
				myDiv.style.width = `100%`;
				myDiv.style.zIndex = "-1";
				myDiv.style.background = element.style.background;
				myDiv.style.cursor = element.style.cursor;
				element.style.background = "rgba(219, 52, 235,0.3)";
				myDiv.id = "aleDiv-3660e472-b05a-409a-a9c0-ce209106cfe0";
				try {
					element?.parentNode?.insertBefore(myDiv, element);
				} catch {}
				if(props.onPathMouseOver){
					const path = getDomPath(element);
                	props.onPathMouseOver(path);
				}
			}
		}
	};

	function getDomPath(el: Element) {
		if (!el) {
			return;
		}
		var stack = [];
		var isShadow = false;
		while (el.parentNode != null) {
			var sibCount = 0;
			var sibIndex = 0;
			for (var i = 0; i < el.parentNode.childNodes.length; i++) {
				var sib = el.parentNode.childNodes[i];
				if (sib.nodeName === el.nodeName) {
					if (sib === el) {
						sibIndex = sibCount;
					}
					sibCount++;
				}
			}
			var nodeName = el.nodeName.toLowerCase();
			if (isShadow) {
				nodeName += "::shadow";
				isShadow = false;
			}
			if (sibCount > 1) {
				stack.unshift(
					nodeName + ":nth-of-type(" + (sibIndex + 1) + ")"
				);
			} else {
				stack.unshift(nodeName);
			}
			el = el.parentNode as Element;
			if (el.nodeType === 11) {
				isShadow = true;
				const cp: any = el;
				el = cp.host;
			}
		}
		stack.splice(0, 1);
		return stack.join(" > ");
	}
	return (
		<div >
		</div>
	);
}
