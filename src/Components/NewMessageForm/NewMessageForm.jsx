import React from "react"
import "./NewMessageForm.css"

const NewMessageForm = ({ addNewMessage }) => {

    const handleSubmitSendMessageForm = (event) => {
        event.preventDefault()
        let new_message_text = event.target.message.value

        addNewMessage(new_message_text)

        event.target.message.value = ''
    }
    return (
        <form onSubmit={handleSubmitSendMessageForm}>
            <div className="footer_Content">
                <div className="aaa">
                    <span>
                        <svg viewBox="0 0 24 24" width="24" preserveAspectRatio="xMidYMid meet" class="x11xpdln x1d8287x x1h4ghdb" fill="none"><title>plus-rounded</title><path d="M11 13H5.5C4.94772 13 4.5 12.5523 4.5 12C4.5 11.4477 4.94772 11 5.5 11H11V5.5C11 4.94772 11.4477 4.5 12 4.5C12.5523 4.5 13 4.94772 13 5.5V11H18.5C19.0523 11 19.5 11.4477 19.5 12C19.5 12.5523 19.0523 13 18.5 13H13V18.5C13 19.0523 12.5523 19.5 12 19.5C11.4477 19.5 11 19.0523 11 18.5V13Z" fill="currentColor"></path>
                        </svg>
                    </span>
                </div>
                <div className="bbb">
                    <span>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>expressions</title><path d="M8.49893 10.2521C9.32736 10.2521 9.99893 9.5805 9.99893 8.75208C9.99893 7.92365 9.32736 7.25208 8.49893 7.25208C7.6705 7.25208 6.99893 7.92365 6.99893 8.75208C6.99893 9.5805 7.6705 10.2521 8.49893 10.2521Z" fill="currentColor"></path><path d="M17.0011 8.75208C17.0011 9.5805 16.3295 10.2521 15.5011 10.2521C14.6726 10.2521 14.0011 9.5805 14.0011 8.75208C14.0011 7.92365 14.6726 7.25208 15.5011 7.25208C16.3295 7.25208 17.0011 7.92365 17.0011 8.75208Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.8221 19.9799C15.5379 21.2537 13.8087 21.9781 12 22H9.27273C5.25611 22 2 18.7439 2 14.7273V9.27273C2 5.25611 5.25611 2 9.27273 2H14.7273C18.7439 2 22 5.25611 22 9.27273V11.8141C22 13.7532 21.2256 15.612 19.8489 16.9776L16.8221 19.9799ZM14.7273 4H9.27273C6.36068 4 4 6.36068 4 9.27273V14.7273C4 17.6393 6.36068 20 9.27273 20H11.3331C11.722 19.8971 12.0081 19.5417 12.0058 19.1204L11.9935 16.8564C11.9933 16.8201 11.9935 16.784 11.9941 16.7479C11.0454 16.7473 10.159 16.514 9.33502 16.0479C8.51002 15.5812 7.84752 14.9479 7.34752 14.1479C7.24752 13.9479 7.25585 13.7479 7.37252 13.5479C7.48919 13.3479 7.66419 13.2479 7.89752 13.2479L13.5939 13.2479C14.4494 12.481 15.5811 12.016 16.8216 12.0208L19.0806 12.0296C19.5817 12.0315 19.9889 11.6259 19.9889 11.1248V9.07648H19.9964C19.8932 6.25535 17.5736 4 14.7273 4ZM14.0057 19.1095C14.0066 19.2605 13.9959 19.4089 13.9744 19.5537C14.5044 19.3124 14.9926 18.9776 15.4136 18.5599L18.4405 15.5576C18.8989 15.1029 19.2653 14.5726 19.5274 13.996C19.3793 14.0187 19.2275 14.0301 19.0729 14.0295L16.8138 14.0208C15.252 14.0147 13.985 15.2837 13.9935 16.8455L14.0057 19.1095Z" fill="currentColor"></path>
                        </svg>
                    </span>
                </div>
                <input type="text" placeholder='Escribe un mensaje...' id='message' name='message' required className="ccc"/>
                <button type='submit' className="ddd">
                    <span className="enviar">
                        <svg viewBox="0 0 28 28" height="28" width="28" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>wds-ic-send-filled</title><path d="M5.4 19.425C5.06667 19.5583 4.75 19.5291 4.45 19.3375C4.15 19.1458 4 18.8666 4 18.5V14L12 12L4 9.99997V5.49997C4 5.1333 4.15 4.85414 4.45 4.66247C4.75 4.4708 5.06667 4.44164 5.4 4.57497L20.8 11.075C21.2167 11.2583 21.425 11.5666 21.425 12C21.425 12.4333 21.2167 12.7416 20.8 12.925L5.4 19.425Z" fill="currentColor"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </form>
    )
}

export default NewMessageForm

