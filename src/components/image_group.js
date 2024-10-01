import {Image, Row} from "antd";
import no_image from "../assets/images/no_image.png";
import {useState} from "react";
import Item from "./item";

function ImageGroup({images}) {
    const [imageIndex, setImageIndex] = useState(0);
    return <>
        <Image.PreviewGroup
            items={images}
            fallback={no_image}
        >
            <div style={{
                width: 260,
                height: 390,
                backgroundColor: "#ebebeb",
                alignItems: "center",
                justifyContent: "center",
                display: "flex"
            }}>
                <Image
                    src={images[imageIndex]}
                    fallback={no_image}
                    style={{
                        width: 260,
                        maxHeight: "100%"
                    }}
                />
            </div>
        </Image.PreviewGroup>
        <Row style={{width:260}}>
            {images.map((image, i) => (
                <div key={i} style={imageIndex===i ? {
                    margin: 5,
                    width: 40,
                    height: 70,
                    backgroundColor: "#ebebeb",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    border: '1px solid #021a40',
                } : {
                    margin: 5,
                    width: 40,
                    height: 70,
                    backgroundColor: "#ebebeb",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                }}>
                    <img
                        src={image}
                        onClick={() => (
                            setImageIndex(i)
                        )}
                        style={{
                            width: 40,
                            cursor:"pointer",
                            maxHeight: "100%"
                        }}
                    />
                </div>
            ))}
        </Row>
    </>
}

export default ImageGroup;