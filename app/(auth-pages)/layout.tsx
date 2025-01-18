import Image from "next/image";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center 2xl:bg-white ">
    <div className="relative hidden xl:block">
      <div className="p-5">
        <Image
          src={"/img/login.svg"}
          width={560}
          height={920}
          alt=""
          className="rounded-lg"
        />

        <div className="absolute bottom-10 text-white left-10">
          <h1 className="text-3xl font-bold max-w-[380px] mb-6">
            Keep track of your money and save for your future
          </h1>
          <div className="text-sm max-w-[430px]">
            <p>
              Personal finance app puts you in control of your
              spending. Track transactions, set budgets, and add to
              savings pots easily.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="h-screen grid place-items-center px-5 xl:px-[140px]">
      {children}
    </div>
  </div>
  );
}
