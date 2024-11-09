import React, { useState } from 'react'
import Cropper from 'react-easy-crop';

const CropUserImage = ({image, onCropDone, onCropCancel}) => {
    const [crop, setCrop] = useState({x: 0, y: 0});
    const [zoom, setZoom] = useState(1);

    const [croppedArea, setCroppedArea] = useState(null);
    const [aspectRatio, setAspectRatio] = useState(4/3);

    const onCropComplete = (croppedAreaPercentage, croppedAreaPixel) => {
        setCroppedArea(croppedAreaPixel);
    }

    const onAspectRatioChange = (e) => {
        setAspectRatio(e.target.value);
    }
  return (
    <div className = "absolute z-10" style = {{width: "30rem", height: "30rem", backgroundColor: "#fff", left: "25rem", bottom: "10rem"}}>
        <div>
            <Cropper
                image = {image}
                aspect = {aspectRatio}
                crop = {crop}
                zoom = {zoom}
                onCropChange = {setCrop}
                onZoomChange = {setZoom}
                onCropComplete = {onCropComplete}
                style = {{
                    containerStyle: {
                        width: "100%", 
                        height: "70%",
                        backgroundColor: "#fff"
                    }
                }}
            />
        </div>
        <div className = "relative flex" style = {{top: "22rem", left: "1.3rem"}} onChange = {onAspectRatioChange}>
            <div>
                <input
                    type = "radio"
                    value = {1/1}
                    name = "ratio"
                    style = {{height: "1.5rem", width: "1.5rem"}}
                />
                <span className = "relative text-xl" style = {{bottom: "0.3rem", left: "0.2rem"}}>1:1</span>
            </div>
            <div className = "relative" style = {{left: "1.5rem"}}>
                <input
                    type = "radio"
                    value = {5/4}
                    name = "ratio"
                    style = {{height: "1.5rem", width: "1.5rem"}}
                />
                <span className = "relative text-xl" style = {{bottom: "0.3rem", left: "0.2rem"}}>5:4</span>
            </div>
            <div className = "relative" style = {{left: "3rem"}}>
                <input
                    type = "radio"
                    value = {4/3}
                    name = "ratio"
                    style = {{height: "1.5rem", width: "1.5rem"}}
                />
                <span className = "relative text-xl" style = {{bottom: "0.3rem", left: "0.2rem"}}>4:3</span>
            </div>
            <div className = "relative" style = {{left: "4.5rem"}}>
                <input
                    type = "radio"
                    value = {5/3}
                    name = "ratio"
                    style = {{height: "1.5rem", width: "1.5rem"}}
                />
                <span className = "relative text-xl" style = {{bottom: "0.3rem", left: "0.2rem"}}>5:3</span>
            </div>
            <div className = "relative" style = {{left: "6rem"}}>
                <input
                    type = "radio"
                    value = {3/2}
                    name = "ratio"
                    style = {{height: "1.5rem", width: "1.5rem"}}
                />
                <span className = "relative text-xl" style = {{bottom: "0.3rem", left: "0.2rem"}}>3:2</span>
            </div>
            <div className = "relative" style = {{left: "7.5rem"}}>
                <input
                    type = "radio"
                    value = {16/9}
                    name = "ratio"
                    style = {{height: "1.5rem", width: "1.5rem"}}
                />
                <span className = "relative text-xl" style = {{bottom: "0.3rem", left: "0.2rem"}}>16:9</span>
            </div>
        </div>

        <div className = "flex">
            <button className = "relative rounded-2xl text-xl font-ubuntu" style = {{top: "23.5rem", left: "4rem", width: "6rem", height: "3rem", borderWidth: "3px", borderColor: "#229986", color: "#229986"}} onClick = {onCropCancel}>Cancel</button>
            <button className = "relative rounded-2xl text-xl font-ubuntu, text-white" style = {{top: "23.5rem", left: "10rem", width: "10rem", height: "3rem", backgroundColor: "#229986"}} onClick = {() => onCropDone(croppedArea)}>Crop & Apply</button>
        </div>
    </div>
  )
}

export default CropUserImage
