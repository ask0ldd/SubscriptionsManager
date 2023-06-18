import '../style/NewMember.css'

function NewMember(){
    return (
        <main>
            <form className="newMember-Form">
                <div>
                    <label htmlFor="lastname">Lastname</label>
                    <input name="lastname" type="text"/>
                    <label className='defaultSpacing' htmlFor="birthdate">Birthdate</label>
                    <input name="birthdate" type="text"/>
                </div>
                <div>
                    <label htmlFor="firstname">Firstname</label>
                    <input name="firstname" type="text"/>
                    <label className='defaultSpacing' htmlFor="gender">Gender</label>
                    <input name="gender" type="text"/>

                </div>
            </form>
        </main>
    )
}

export default NewMember