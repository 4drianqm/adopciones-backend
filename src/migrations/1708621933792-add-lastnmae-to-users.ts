import { MigrationInterface, QueryRunner } from "typeorm";

export class AddLastnmaeToUsers1708621933792 implements MigrationInterface {
    name = 'AddLastnmaeToUsers1708621933792'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "lastname" character varying(255) NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lastname"`);
    }

}
