import React from 'react'

function EditPostSkeleton() {

    return (
        <div className="w-full flex-col justify-center relative">
            <div className="rounded-xl bg-gray-200 h-80 animate-pulse"></div>

            {/* <div className="absolute right-4 top-4">
                <div className="bg-gray-200 h-8 w-28 mb-2 animate-pulse"></div>
                <div className="bg-gray-200 h-8 w-28 animate-pulse"></div>
            </div> */}

            <div className="w-full mb-6 mt-10">
                <div className="text-2xl font-bold bg-gray-200 h-8 w-3/4 animate-pulse"></div>
            </div>

            <div className="browser-css text-left">
                <div className="bg-gray-200 h-16 w-full animate-pulse"></div>
                <div className="bg-gray-200 h-16 w-3/4 animate-pulse"></div>
                <div className="bg-gray-200 h-16 w-1/2 animate-pulse"></div>
            </div>
        </div>
    )
}

export default EditPostSkeleton;