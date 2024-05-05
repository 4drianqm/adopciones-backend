import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDatabase1708448054978 implements MigrationInterface {
    name = 'InitDatabase1708448054978'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "roles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."dogs_gender_enum" AS ENUM('1', '0')`);
        await queryRunner.query(`CREATE TABLE "dogs" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "breed" character varying(255) NOT NULL, "age" character varying(255) NOT NULL, "gender" "public"."dogs_gender_enum" NOT NULL, "userId" integer, CONSTRAINT "PK_c0911b1d44db6cdd303c6d6afc9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "email" character varying NOT NULL, "addres" character varying, "roleId" uuid, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "dogs" ADD CONSTRAINT "FK_6cdfbacf87ca53fdfabdf92a693" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_368e146b785b574f42ae9e53d5e" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_368e146b785b574f42ae9e53d5e"`);
        await queryRunner.query(`ALTER TABLE "dogs" DROP CONSTRAINT "FK_6cdfbacf87ca53fdfabdf92a693"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "dogs"`);
        await queryRunner.query(`DROP TYPE "public"."dogs_gender_enum"`);
        await queryRunner.query(`DROP TABLE "roles"`);
    }

}