import React from "react"
import { Col, Row } from "reactstrap"
import {Card, Progress, ProgressBarContent} from "../styles"


interface Props{
    title:string
    description:string
    date:string
    level:number,
    logo:any
}

export const CardCertificate:React.FC<Props> = ({title,description,date,level,logo})=>{
    return (
        <Card>
            <Row>
                <Col sm={3}>
                    <img src={logo} alt={title} />
                </Col>
                <Col sm={9}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>{date}</p>
                </Col>
            </Row>
            <Row>
                <div>
                    
                    <ProgressBarContent>
                        <Progress progress={level}>
                            <p>{level+"%"}</p>
                        </Progress>
                    </ProgressBarContent>

                </div>
            </Row>
            
        </Card>
    )
}

