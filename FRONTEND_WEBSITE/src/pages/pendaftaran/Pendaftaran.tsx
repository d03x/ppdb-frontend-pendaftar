import BreadCrumb from "@/components/BreadCrumb";
import {  Steps } from "antd";
import {useState} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";
import DataDiri from "@pages/pendaftaran/steps/DataDiri.tsx";
import OrangTua from "@pages/pendaftaran/steps/OrangTua.tsx"
import SekolahAsal from "@pages/pendaftaran/steps/SekolahAsal.tsx"
import NilaiRapot from "@pages/pendaftaran/steps/NilaiRapot.tsx"
import StepFinish from "@pages/pendaftaran/steps/StepFinish.tsx";
const Pendaftaran = () => {
    const [current,setCurrent] = useState<number>(0);
    const breadcrumbItems = [
        { label: 'Dashboard', link: '/dashboard' },
        { label: 'Pendaftaran' },
    ];

    const items = [
        {
            title: 'Data Diri',
            component : <DataDiri/>
        },
        {
            title: 'Data Orang Tua',
            component : <OrangTua/>
        },
        {
            title: 'Sekolah Asal',
            component : <SekolahAsal/>
        },
        {
            title: 'Rapot',
            component:  <NilaiRapot/>
        },
        {
            title: 'Finished',
            component:  <StepFinish/>
        },
    ];
    const navigate: NavigateFunction = useNavigate()
    const changeStep = (value : number) => {
        setCurrent(value)
        navigate('/pendaftaran?step='+(value+1))
    }
    return (
        <>
            <BreadCrumb items={breadcrumbItems} />
            <div className="bg-white space-y-3 p-3 rounded">
                <Steps status={'process'} onChange={changeStep} current={current} percent={10} size="small" labelPlacement="horizontal" items={items} />
            </div>
            <div className="bg-white space-y-8 mt-3 md:p-8 p-4 py-8">
                <div>
                    <div className={"text-xs font-bold"}>Step {current+1} dari {items.length} - {items[current].title}</div>
                </div>
                <div className="">
                    { items[current].component }
                </div>
            </div>
        </>
    );
}

export default Pendaftaran;
