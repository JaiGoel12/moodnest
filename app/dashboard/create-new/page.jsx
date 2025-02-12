"use client"
import React, { useState } from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'
import AddReq from './_components/AddReq'
import { Button } from '@/components/ui/button'

function CreateNew() {
    const [formData, setformData] = useState([]);

    const onHandleInputChange = (value, fieldName) => {
        setformData(prev => ({
            ...prev,
            [fieldName]: value
        }))
        //console.log(formData)
    }

    return (
        <div>
            <h2 className='font-bold text-3xl text-primary text-center'>Experience the Magic of AI Remodeling</h2>
            <p className='text-center text-gray-500'>Tranform any room with a click. Select a space, choose a style, and watch as a AI instantly reimagines your environment.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
                {/* Image Selection */}
                <ImageSelection selectedImage={(value) => onHandleInputChange(value, 'image')} />
                {/* Form Input Section */}
                <div>
                    {/* Room Type */}
                    <RoomType selectedRoomType={(value) => onHandleInputChange(value, 'roomType')} />
                    {/* Design type */}
                    <DesignType selectedDesigntype={(value) => onHandleInputChange(value, 'designType')} />
                    {/* Additional Requirements Text Area (optional)*/}
                    <AddReq addReqInput={(value) => onHandleInputChange(value, 'additionalReq')} />
                    {/* Button to Generate Image */}
                    <Button className='w-full mt-5'>Generate</Button>
                    <p className='text-sm text-gray-400 mb-52'>NOTE:1 Credit will be used to redesign your room</p>
                </div>
            </div>
        </div>
    )
}

export default CreateNew
