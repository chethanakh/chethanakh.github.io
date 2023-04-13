
export function IntroSection() {
    return (
        <section className='grid md:grid-cols-5 gap-0 h-fit'>
            <div className='md:col-span-2 bg-secondary-900 flex flex-col md:items-end items-start md:py-20 py-5 px-10'>
                <h3 className="text-3xl text-secondary-200 font-bold">Intro</h3>
                <h6 className="text-xl text-secondary-200 font-light mt-5">Who am I ?</h6>
            </div>
            <div className='md:col-span-3 bg-secondary-800 md:p-20 p-5 text-secondary-200 text-md'>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Nulla vitae mauris non felis mollis faucibus.
                </p>
                <p className="mt-2">
                    Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Fusce lacinia arcu et nulla. Nulla vitae mauris non felis mollis.
                </p>
            </div>
        </section>
    );
} 