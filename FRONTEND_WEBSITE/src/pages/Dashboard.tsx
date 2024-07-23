import BreadCrumb from "@/components/BreadCrumb";
import { Alert, Timeline, Upload } from "antd";
import { Clock, File, InfoIcon, LucideSnail, Repeat, UploadCloud } from "lucide-react";

const Dashboard = () => {
    return (
        <>
            <BreadCrumb items={[
                {
                    label: "Dashboard",
                    link: '/dashboard'
                },
                {
                    label: "Home"
                }
            ]} />
            <Alert type="info" showIcon banner message={"Pendaftaran anda sedang di proses oleh admin! Terus pantau info terbaru lewat dashboard atau cek email secara rutin"} />
            <div className="bg-white p-3 lg:p-6 mt-3 rounded">
                <div className="mt-3 mb-6 font-semibold text-lg leading-none tracking-relaxed">
                    <h1>Timeline Pendaftaran Anda</h1>
                </div>
                <Timeline className="mb-2" mode="left">
                    <Timeline.Item style={{paddingBottom:15}} dot={<File size={18}/> }>Melengkapi formulir pendaftaran</Timeline.Item>
                    <Timeline.Item style={{paddingBottom:15}} color="green" dot={ <UploadCloud size={18}/> }>Mengupload Berkas pendaftaran</Timeline.Item>
                    <Timeline.Item style={{paddingBottom:15}} dot={<LucideSnail size={14} />} color="red">
                        Proses verifikasi pendaftaran 2015-09-01
                    </Timeline.Item>
                    <Timeline.Item style={{paddingBottom:15}} dot={<InfoIcon size={14} />}>
                        Pengumuman Hasil pendaftaran

                    </Timeline.Item>
                    <Timeline.Item style={{paddingBottom:15}} dot={<Repeat size={18}/>} color="green">Daftar ulang</Timeline.Item>
                </Timeline>
            </div>
        </>
    );
}

export default Dashboard;
