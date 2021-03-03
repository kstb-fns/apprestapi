'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi KSTB REST API ku berjalan", res)
};


//Menampilkan data semua Anggota
exports.tampilsemuaanggota = function(req,res){
    connection.query('SELECT * FROM tbl_anggota', function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    });
};

//Menampilkan filter Anggota Id 'id_anggota'
exports.tampilanggotaperid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM tbl_anggota WHERE id_identitas = ?', [id] ,
        function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    });
};
