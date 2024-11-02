import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
import {getUploadApiUrl} from "@/apis/common";

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
const ImageGroupUploader = ({fileList, handleChange}) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };
    const uploadButton = (
        <button style={{border:0,background:'none'}} type="button">
            <PlusOutlined />
            <div style={{marginTop:8}}>
                Upload
            </div>
        </button>
    );
    return (
        <>
            <Upload
                action={getUploadApiUrl()}
                listType="picture-card"
                fileList={fileList}
                withCredentials={true}
                onPreview={handlePreview}
                onChange={handleChange}
                name={"image"}
                accept={"image/png, image/jpg, image/jpeg"}
            >
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            {previewImage && (
                <Image
                    wrapperStyle={{
                        display: 'none',
                    }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                />
            )}
        </>
    );
};
export default ImageGroupUploader;