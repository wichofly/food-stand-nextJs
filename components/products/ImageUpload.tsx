'use client';

import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { useState } from 'react';
import { TbPhotoPlus } from 'react-icons/tb';

type UploadSuccessInfo = {
  secure_url?: string;
};

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState('');
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  if (!uploadPreset) {
    return (
      <p className="text-sm text-red-600">Upload Preset is not configured.</p>
    );
  }

  return (
    <CldUploadWidget
      uploadPreset={uploadPreset}
      options={{ maxFiles: 1 }}
      onSuccess={(result, { widget }) => {
        if (result.event === 'success') {
          widget.close();
          if (result.info && typeof result.info === 'object') {
            const info = result.info as UploadSuccessInfo;

            if (info.secure_url) {
              setImageUrl(info.secure_url);
            }
          }
        }
      }}
    >
      {({ open }) => (
        <>
          <div className="space-y-2">
            <label htmlFor="image" className="text-slate-800">
              Image:
              <div
                onClick={() => open()}
                className="relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100 rounded-md"
              >
                <TbPhotoPlus size={50} className="text-2xl " />
                <p className="text-lg font-medium">Add Image</p>

                {imageUrl && (
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={imageUrl}
                      fill
                      style={{ objectFit: 'contain' }}
                      alt="Uploaded"
                    />
                  </div>
                )}
              </div>
            </label>
          </div>

          <input type="hidden" name="image" value={imageUrl} />
        </>
      )}
    </CldUploadWidget>
  );
};

export default ImageUpload;
