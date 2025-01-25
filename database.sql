CREATE TABLE persona (
	id INT auto_increment primary key, 
	nombre_completo VARCHAR(255) NOT NULL,
	nr_documento VARCHAR(50) NOT NULL,
	correo VARCHAR(255),
    telefono VARCHAR(50)
);

CREATE TABLE habitacion (
	id INT AUTO_INCREMENT PRIMARY KEY,
    habitacion_piso INT CHECK(habitacion_piso > 0 AND habitacion_piso <= 10),
    habitacion_nro INT CHECK(habitacion_nro > 0 AND habitacion_nro < 20),
    cant_camas INT CHECK(cant_camas >= 1 AND cant_camas <= 4),
    tiene_television BOOLEAN NOT NULL,
    tiene_frigobar BOOLEAN NOT NULL
);

CREATE TABLE reserva (
	id INT AUTO_INCREMENT PRIMARY KEY,
	fecha_reserva DATETIME NOT NULL DEFAULT NOW(),
    fecha_entrada DATETIME ,
    fecha_salida DATETIME ,
    habitacion_id INT NOT NULL,
    persona_id INT NOT NULL,
    monto_reserva DECIMAL(10,2),
    FOREIGN KEY (habitacion_id) REFERENCES habitacion(id),
    FOREIGN KEY (persona_id) REFERENCES persona(id),
    CHECK(fecha_entrada > fecha_reserva),
    CHECK(fecha_salida > fecha_entrada)
);