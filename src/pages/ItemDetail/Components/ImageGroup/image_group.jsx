import {Flex, Image, Row} from "antd";
import no_image from "@/assets/images/no_image.png";
import {useState} from "react";
import "./image_group.css"
import classNames from "classnames";

function ImageGroup({images}) {
    const [imageIndex, setImageIndex] = useState(0);
    return <Flex vertical={true}>
        <Image.PreviewGroup
            items={images}
            fallback={no_image}
        >
            <div className="image-group-cover">
                <Image src={images[imageIndex]} fallback={no_image}/>
            </div>
        </Image.PreviewGroup>
        <Row style={{width:260}}>
            {images.map((image, i) => (
                <div className={classNames({
                    "image-select-group": true,
                    "selected": i === imageIndex,
                })} key={i}>
                    <img className="image-group-select"
                        src={image}
                        onClick={() => (
                            setImageIndex(i)
                        )}
                    />
                </div>
            ))}
        </Row>
    </Flex>
}

export default ImageGroup;