import s from './CategoriesReport.module.css';

function ReportCostError() {
    return (
        <div>
            <p className={s.error}>
                В этом месяце вы не проводили транзакции &nbsp; 😊
            </p>
        </div>
    );
}

export default ReportCostError;
