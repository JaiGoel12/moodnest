"use client"
import React, { useState } from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'
import AddReq from './_components/AddReq'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { storage } from '@/config/appwriteConfig'
import {ID } from 'appwrite'

function CreateNew() {
    const [formData, setformData] = useState({});

    const handleFileUpload = (event) => {
        const file = event.target.files[0]; 
        SaveRawImageToAppwrite(file);
    };
    
    

    const onHandleInputChange = (value, fieldName) => {
        setformData(prev => ({
            ...prev,
            [fieldName]: value
        }))
        //console.log(formData)
    }

    const GenerateAiImage = async () => {
        try {
            if (!formData.image) {
                console.error("No image selected for upload!");
                return;
            }
    
            // Upload the image and get the URL
            const fileUrl = await SaveRawImageToAppwrite(formData.image);
            if (!fileUrl) {
                console.error("Image upload failed!");
                return;
            }
    
            // Add the required fields
            const updatedFormData = {
                imageUrl: fileUrl,
                roomType: formData?.roomType,
                designType: formData?.designType,
                additionalReq: formData?.additionalReq
            };
    
            // Send request with updatedFormData
            const result = await axios.post('/api/redesign-room', updatedFormData);
            console.log(result.data);
        } catch (error) {
            console.error("Error generating AI image:", error);
        }
    };
    
    
    const SaveRawImageToAppwrite = async (selectedImage) => {
        if (!selectedImage) {
            console.error("No file provided!");
            return null;
        }
    
        //console.log("Uploading file:", selectedImage);
        try {
            const fileId = ID.unique();
            const response = await storage.createFile(
                process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID,
                fileId,
                selectedImage
            );
            //console.log("File uploaded successfully:", response);
    
            // Get the file URL
            const fileUrl = storage.getFileView(
                process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID,
                fileId
            );
           // console.log("File URL:", fileUrl);
    
            // Update formData state with the uploaded file URL
            setformData(prev => ({
                ...prev,
                imageUrl: fileUrl // Store file URL in state
            }));
    
            return fileUrl;
        } catch (error) {
            console.error("Error uploading file:", error);
            return null;
        }
    };
    
    

    return (
        <div>
            <h2 className='font-bold text-3xl text-primary text-center'>Experience the Magic of AI Remodeling</h2>
            <p className='text-center text-gray-500'>Tranform any room with a click. Select a space, choose a style, and watch as a AI instantly reimagines your environment.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
                {/* Image Selection */}
                <ImageSelection selectedImage={(file) => onHandleInputChange(file, 'image')} />

                {/* Form Input Section */}
                <div>
                    {/* Room Type */}
                    <RoomType selectedRoomType={(value) => onHandleInputChange(value, 'roomType')} />
                    {/* Design type */}
                    <DesignType selectedDesigntype={(value) => onHandleInputChange(value, 'designType')} />
                    {/* Additional Requirements Text Area (optional)*/}
                    <AddReq addReqInput={(value) => onHandleInputChange(value, 'additionalReq')} />
                    {/* Button to Generate Image */}
                    <Button className='w-full mt-5' onClick={GenerateAiImage}>Generate</Button>
                    <p className='text-sm text-gray-400 mb-52' >NOTE:1 Credit will be used to redesign your room</p>
                </div>
            </div>
        </div>
    )
}

export default CreateNew
