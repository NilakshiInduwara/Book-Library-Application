import Image from "next/image";

export default function About() {
    return(
        <div className="flex min-h-screen flex-col py-10 bg-zinc-50 font-sans dark:bg-black">
            <div className="w-full relative h-[500px]">
                <Image
                    src="/images/image_2.jpg"
                    alt="Bookshelf"
                    fill
                    className="object-cover object-cover"
                    priority
                />
            </div>

            <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-between py-10 bg-white 
        dark:bg-black sm:items-start">
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left px-4">
                    <h1 className="max-w-2xl text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        About Our Book Store
                    </h1>
                    <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        Our Book Store Management application is designed to provide users with an intuitive and seamless experience for 
                        browsing and purchasing books online. With a vast collection of titles across various genres, users can easily find 
                        their next favorite read. The platform offers features such as advanced search filters, personalized recommendations, 
                        and a secure checkout process to ensure a smooth shopping experience. Whether you're a casual reader or a book 
                        enthusiast, our application aims to cater to all your literary needs.
                    </p>
                </div>
            </main>
        </div>
    );
}