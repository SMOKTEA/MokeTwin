import { View3d } from '@moke/View3d/src'
import { PageContainer } from '@ant-design/pro-components';
import styles from '@/pages/Home/index.less';


const TestDrei: React.FC = () => {
    return (
        <PageContainer>
            <div style={{position: 'fixed', width: '100%', height: '100%', background:'black', marginLeft:'-46px'}}>
                <View3d />
            </div>
        </PageContainer>
    );
};

export default TestDrei;