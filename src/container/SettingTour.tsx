import React, { useState } from 'react'
import Tour  from 'reactour';
import ListPathSelected from '../component/ListPathSelected'
import SelectPath from '../component/SelectPath'
import { Tour as TourType } from '../type/Tour'


export default function SettingTour() {
	const [config, setConfig] = useState<TourType[]>([]);
	const [isDemo, setDemo] = useState<boolean>(false);
	const [isSetting, setSetting] = useState<boolean>(false);
	function onRemoveConfig(item: TourType){
		var getTour  = [...config];
		const index = getTour.findIndex(tour=> tour.index === item.index) 
		if(index>=0){
			getTour.splice(index, 1);
			updateConfig([...getTour])
		}
	}
	const updateConfig = (config: TourType[])=>{
		config = config.map((item, value)=>{
			item.index = value + 1;
			return item;
		})
		setConfig(config)
	}
    return (
        <div>
			<SelectPath
				notSelectedChillById = {["popup-select-path-tour", "select-path-tour"]}
				// notSelectedChillByAttribute = {["tour-flynotes"]}
				notSelectedChillByTagName = {["footer"]}
				isSelectPath = {isSetting}

				onPathClick = {(path)=>{
					updateConfig([...config,{
						index: config.length+1,
						selector : path || "",
						tittle : `Index ${config.length+1}`,
						content : ""
					}])
				}}
			/>
			<Tour
				steps={config as any}
				isOpen={isDemo}
				maskClassName="mask"
				className="helper"
				rounded={5}
				accentColor={"#5cb7b7"}
				onRequestClose={() => {
					setDemo(false)
				}}
			/>
            <ListPathSelected
				isDemo = {isDemo}
				isSetting = {isSetting}
				onClickDemo = {()=>{setDemo(!isDemo); setSetting(false)}}
				onClickSetting = {()=>{setSetting(!isSetting)}}
				onChangeList = {(items)=>{
					updateConfig(items)
				}}
				onDelete = {onRemoveConfig}
				onSave = {(item: TourType )=>{}}
				listTour = {config} 
			/>
        </div>
    )
}
