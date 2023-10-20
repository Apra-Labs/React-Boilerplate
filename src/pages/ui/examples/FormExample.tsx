import { lazy } from 'react';
import styles from '../styles/Common.module.css';
import { useTranslation } from "react-i18next";
const NavigationStatus = lazy(() => import('../../../containers/navigationStatus'));
const HeaderComponent = lazy(() => import('../../../components/HeaderComponent'));
const FormComponent = lazy(() => import('../../../components/FormComponent'));

const FormExample: React.FC = () => {
    const { t } = useTranslation();

    const handleSubmit = (values: any) => {
        console.log(values);
    }

    return (
        <div className={styles.exampleContainer}>
            <NavigationStatus
                route={t("UiKit")}
                subRoute={t("Form")}
            />
            <HeaderComponent title={t("Form")} className={styles.heading} />
            <div className={styles.commonContainer}>
                <FormComponent
                    onSubmit={handleSubmit}
                    inputFields={[
                        { name: 'email', component: "input", type: 'text', placeholder: 'Email' },
                        { name: 'password', component: 'input', type: 'password', placeholder: 'Password' },
                    ]}
                    buttons={[
                        { label: 'Submit', type: 'submit' }
                    ]}
                />
            </div>
        </div>
    )
}

export default FormExample;