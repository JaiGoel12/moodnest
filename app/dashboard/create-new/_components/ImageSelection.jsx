"use client"
import Image from "next/image";
import React, { useState } from "react";

function ImageSelection({ selectedImage }) {
    const [file, setfile] = useState()

    const onFileSelected = (event) => {
        // console.log(event.target.files[0])
        setfile(event.target.files[0])
        selectedImage(event.target.files[0])
    }


    return (
        <div>
            <label>Select Image of your Room</label>
            <div className="mt-3">
                <label htmlFor="upload-image">
                    <div className={`p-28 border rounded-xl border-dotted flex justify-center border-primary bg-slate-200 cursor-pointer hover:shadow-xl ${file && "p-0 bg-white"}`}>
                        {!file ? <Image src={'/image-upload.png'} alt="image-upload" width={70} height={70} />
                            : <Image src={URL.createObjectURL(file)} width={300} height={300} className="w-[300px] h-[300px] object-cover" alt="noimage" />}
                    </div>
                </label>
                <input
                    type="file"
                    accept="image/*"
                    id="upload-image"
                    style={{ display: "none" }}
                    onChange={onFileSelected}
                />
            </div>
        </div>
    );
}

export default ImageSelection;
