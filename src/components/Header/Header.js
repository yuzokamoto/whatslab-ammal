import videoCam from "../../assets/video-cam.svg"
import phoneCall from "../../assets/phone-call.svg"
import moreOptions from "../../assets/more-options.svg"
import { HeaderContainer } from "./Header.styled"

function Header(props) {
    const { senders, currSender, onChangeSender } = props
    
    return (
        <HeaderContainer>
            <div>
                <img src="https://picsum.photos/200/200" alt="Profile photo" />
                <div>
                    <select value={currSender} onChange={onChangeSender} >
                        {senders.map((sender) => (
                            <option key={sender} value={sender}>
                                {sender}
                            </option>
                        ))}
                    </select>
                    <p>Online</p>
                </div>
            </div>

            <div>
                <button>
                    <img src={videoCam} alt="Video cam icon" />
                </button>

                <button>
                    <img src={phoneCall} alt="Phone call icon" />
                </button>

                <button>
                    <img src={moreOptions} alt="More options icon" />
                </button>
            </div>
        </HeaderContainer>
    )
}

export default Header