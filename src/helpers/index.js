const DataConverter = {};

DataConverter.htmlParse = (str) => {
    var rp = String(str);
    rp = rp.replace(/<[^>]*>?/g, '');
    //
    rp = rp.replace(/&aacute;/g, 'á');
    rp = rp.replace(/&eacute;/g, 'é');
    rp = rp.replace(/&iacute;/g, 'í');
    rp = rp.replace(/&oacute;/g, 'ó');
    rp = rp.replace(/&uacute;/g, 'ú');
    rp = rp.replace(/&ntilde;/g, 'ñ');
    rp = rp.replace(/&uuml;/g, 'ü');
    //
    rp = rp.replace(/&Aacute;/g, 'Á');
    rp = rp.replace(/&Eacute;/g, 'É');
    rp = rp.replace(/&Iacute;/g, 'Í');
    rp = rp.replace(/&Oacute;/g, 'Ó');
    rp = rp.replace(/&Uacute;/g, 'Ú');
    rp = rp.replace(/&Ñtilde;/g, 'Ñ');
    rp = rp.replace(/&Üuml;/g, 'Ü');
    //
    rp = rp.replace(/&nbsp;/g, '');
    return rp;
}

DataConverter.dateConverter = (date) => {
    const _date = new Date(date);
    let day = _date.getDate()
    let month = _date.getMonth() + 1
    let year = _date.getFullYear()
    if (month < 10) {
        return `${day}/0${month}/${year}`;
    } else {
        return `${day}/${month}/${year}`;
    }
}

export default DataConverter;