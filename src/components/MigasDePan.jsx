import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";

function MigasDePan() {
    const getPartesURL = () => {
        const url = window.location.pathname;
        return url.split('/').filter(parte => parte);
    };

    const partesURL = getPartesURL();

    return (
        <Breadcrumb>
            {partesURL.length && partesURL.map((parteUrl, index) => <Breadcrumb.Item key={index} active={partesURL.length}>{parteUrl}</Breadcrumb.Item>)}
        </Breadcrumb>
      );
}

export default MigasDePan;