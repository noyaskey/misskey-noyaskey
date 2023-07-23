export class CarefulOptions1690028771799 {
    name = 'CarefulOptions1690028771799'

    async up(queryRunner) {
			await queryRunner.query(`ALTER TABLE "user_profile" ADD "carefulMassive" boolean NOT NULL DEFAULT false`);
			await queryRunner.query(`ALTER TABLE "user_profile" ADD "carefulRemote" boolean NOT NULL DEFAULT false`);
	}

	async down(queryRunner) {
			await queryRunner.query(`ALTER TABLE "user_profile" DROP COLUMN "carefulMassive"`);
			await queryRunner.query(`ALTER TABLE "user_profile" DROP COLUMN "carefulRemote"`);
	}
}
