import { useEffect, useState } from "react";

const Form = ({ addMember, updateMember, memberToUpdate }) => {
    const [memberData, setMemberData]=useState({
        name: "",
        email: "",
        role: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        if (memberData.id) {
            updateMember(updateMember)
        }
        else{
        addMember({...memberData, id: Math.round(Math.random() *99999999) });
        }
        setMemberData({ name: "", email: "", role: ""})
    };

    useEffect (()=>{
        if(memberToUpdate) {
            setMemberData(memberToUpdate);
        }
    },[memberToUpdate]);

    return (
    <form onSubmit={submitHandler} className="member-form   ">
        <div>
        <label>
            <span>
            Üye adı:
            </span>
            <input type="text" onChange={(e) => {
                setMemberData({...memberData, name: e.target.value})
            }} 
            value={memberData.name}
            />
            </label>
            </div>
            <div>
            <label>
                <span>
            Üye email:
            </span>
            <input type="email" onChange={(e) => {
                setMemberData({...memberData, email: e.target.value})
            }} 
            value={memberData.email}
            />
            </label>
            </div>
            <div>
            <label>
                <span>
            Üye rolü:
            </span>
            <input type="text" 
            onChange={(e) => {
                setMemberData({...memberData, role: e.target.value})
            }} 
            value={memberData.role}
            />
            </label>
            </div>
         <button type="submit">
            {memberData.id ? "Güncelle" : "Yeni Kayıt Oluştur"}
        </button>
        </form>
    );
};


export default Form;