import React from 'react'
import ImageDevice from '../../assets/images/illustration-devices.svg'
import Button from '../../components/Button'

const HomeContent = () => {
    return (
        <section className="content-responsive-center">
            <section className="content-responsive-image">
                <img src={ImageDevice} alt="Imagem dos dispositivos"/>
            </section>
            <section className="content-responsive-call">
                <section className="content-responsive-call-title">
                    <span>NEW</span><p>Monograph dashboard</p>
                </section>
                <section className="content-responsive-call-subtitle">
                    <h1>Powerful insights into your team</h1>
                </section>
                <section className="content-responsive-call-explain">
                    <h4>Project planning and time tracking for agile teams</h4>
                </section>
                <section className="content-responsive-call-buttons">
                    <Button title="SCHEDULE A DEMO" classNameButton="btn-call-action" />
                    <Button title="TO SEE A PREVIEW" />
                </section>
            </section>
        </section>
    )
}

export default HomeContent