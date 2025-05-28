/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class PointsSeeding1748420727347 {
  constructor() {
    this.name = 'PointsSeeding1748420727347';
  }

  async up(queryRunner) {
    const defaultPlan = [
      {
        points: 100,
        value: 100,
      },
      {
        points: 300,
        value: 300,
      },
      {
        points: 500,
        value: 500,
      },
    ];

    const pointsPlanRepo = queryRunner.manager.getRepository('PointsPlan');

    for (const plan of defaultPlan) {
      const exists = await pointsPlanRepo.findOneBy({ points: plan.points, value: plan.value });

      if (!exists) {
        await pointsPlanRepo.save(plan);
      }
    }
  }

  async down(queryRunner) {
    await queryRunner.manager.createQueryBuilder().delete().from('PointsPlan').execute();
  }
};
