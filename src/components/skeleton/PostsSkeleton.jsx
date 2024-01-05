import React from 'react'

function PostsSkeleton() {
    return (
        <div className="w-full bg-gray-100 rounded-xl p-4 h-52 animate-pulse">
            <div className="w-full justify-center mb-4 bg-gray-200 h-32 rounded-xl"></div>
            <h2 className="text-xl font-bold bg-gray-300 h-6 rounded-full"></h2>
        </div>
    )
}

export default PostsSkeleton;