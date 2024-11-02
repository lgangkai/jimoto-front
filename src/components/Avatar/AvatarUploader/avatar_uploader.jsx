import {Button, Flex, message, Upload} from "antd";
import no_image from "@/assets/images/no_image.png";
import {useEffect, useState} from "react";
import "./avatar_uploader.css"
import "@/style/base.css"
import {getUploadApiUrl} from "@/apis/common";

function AvatarUploader(props) {
    const [previewImage, setPreviewImage] = useState(no_image);
    useEffect(() => {
        setPreviewImage(props.avatar===undefined?no_image:props.avatar)
    }, [props.avatar]);

    const handleOnChange = (info) => {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            setPreviewImage(JSON.parse(info.file.response.data).url)
            props.onUploadDone(JSON.parse(info.file.response.data))
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }

    const upload_props = {
        name: 'image',
        action: getUploadApiUrl(),
        accept: "image/png, image/jpg, image/jpeg",
        onChange: handleOnChange,
        showUploadList: false,
        maxCount: 1,
        withCredentials: true,
    };
    return <Flex className="avatar-uploader-top">
        <img
            className="avatar-big"
            src={previewImage}
            alt=""
        />
        <div className="avatar-uploader-wrapper">
            <Upload {...upload_props}>
                <Button
                    className="avatar-uploader-btn"
                    variant="outlined"
                    danger
                >
                    画像アプロード
                </Button>
            </Upload>
        </div>
    </Flex>
}

export default AvatarUploader;