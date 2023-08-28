import { useState, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { Container, Row, Col, InputGroup, Form } from 'react-bootstrap';
import PersonalInformationComponent from './PersonalInformationComponent';
import { useTranslation } from 'react-i18next';
import './styles.css';

const Profile: React.FC = () => {
    const [user, setUser] = useState<any>(null);

    const loggedInUser = useAppSelector((state) => state.authReducer.user);

    const { t } = useTranslation();

    useEffect(() => {
        setUser(loggedInUser);

        return () => {
            console.log('component unmounted');
        }
    }, [loggedInUser]);

    return (
        <div>
            <Container>
                <Row >
                    <Col lg="4">
                        <Container className='profile'>
                            <div style={{ display: 'flex'}}>
                                <div>
                                    <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='profileImage'></img>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                    <h3>{t("Hello")}</h3>
                                    <h3>{user?.name}</h3>
                                </div>
                            </div>
                        </Container>
                        <Container className='socialMedia'>
                            <p>Social Media</p>
                        </Container>
                    </Col>
                    <Col lg="8">
                        <Container className='personalInformation'>
                            <h3>{t("PersonalInformation")}</h3>
                            <PersonalInformationComponent title={t("Name")} value={user?.name} />
                            <PersonalInformationComponent title={t("EmailAddress")} value={user?.email} />
                            <PersonalInformationComponent title={t("PhoneNumber")} value={user?.phoneNumber} />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profile