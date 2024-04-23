import Header from "@/components/Header";
import AccountContent from "@/app/account/components/AccountContent";

const Account = () => {
  return (
    <div
      className="
                bg-slate-900
                rounded-lg
                h-full
                w-full
                overflow-hidden
                overflow-y-auto
            "
    >
      <Header className="from-bg-slate-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-neutral-100 text-3xl font-semibold">
            Account Settings
          </h1>
        </div>
      </Header>
      <AccountContent />
    </div>
  );
};

export default Account;
