import React from 'react'

const Explore = () => {
    return (
        <section class="bg-white">
            <h6 class="text-center text-2xl mb-6 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore the Future with <strong className="font-extrabold text-primary sm:block">StudyMaterial. </strong>
            </h6>
            <div className="px-4 lg:px-8 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
                <div className="h-50 rounded-lg bg-gray-200">
                    <a href="#" className="group relative block bg-black h-50">
                        <img
                            alt=""
                            src="https://e0.pxfuel.com/wallpapers/973/666/desktop-wallpaper-html-5-thumbnail.jpg"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-sm text-white">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                                        quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="h-50 rounded-lg bg-gray-200">
                    <a href="#" className="group relative block bg-black h-50">
                        <img
                            alt=""
                            src="data:image/jpeg;base64,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"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-sm text-white">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                                        quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="h-50 rounded-lg bg-gray-200">
                    <a href="#" className="group relative block bg-black h-50">
                        <img
                            alt=""
                            src="data:image/png;base64,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"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-sm text-white">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                                        quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="h-50 rounded-lg bg-gray-200">
                    <a href="#" className="group relative block bg-black h-50">
                        <img
                            alt=""
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXKrz1p9GRZArZBObiLwK2w0izr_ailoYMg&s"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-sm text-white">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                                        quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Explore