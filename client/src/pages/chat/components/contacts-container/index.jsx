import NewDm from "./components/new-dm";
import ProfileInfo from "./components/profile-info";

const ContactsContainer = () => {
  return (
    <div className="relative w-full md:w-[35vw] lg:w-[30vw] xl:w-[25vw] bg-[#F8F9FA] border-r border-[#D0D0D0] text-black">
      <div className="p-3 poppins-bold font-bold text-xl text-[#212121] border-b border-[#D0D0D0]">
        SyncChat
      </div>
      <div className="my-5">
        <div className="flex items-center justify-between pr-10">
          <Title text="Direct Messages"/>
          <NewDm/>
        </div>
      </div>
      <div className="my-5">
        <div className="flex items-center justify-between pr-10">
          <Title text="Channels"/>
        </div>
      </div>
      <ProfileInfo/>
    </div>
  );
};

export default ContactsContainer;

const Title = ({ text }) => {
  return (
    <h6 className="uppercase tracking-widest text-[#9E9E9E] pl-10 poppins-light text-opacity-90 text-sm">
      {text}
    </h6>
  );
};
