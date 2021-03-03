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
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
    })
};

//Menampilkan filter Anggota Id 'id_anggota'
exports.tampilanggotaperid = function(req,res){
    let id = req.param.id;
    connection.query('SELECT * FROM tbl_anggota WHERE id_anggota = ?', [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok(rows, res);
            }
    });
};
