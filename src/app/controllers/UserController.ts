import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

interface jsonData {
  username: string;
  password: string;
}

interface dataProps {
  date: string
}

interface dateArrayProps {
  datas: Array<dataProps>
}

const json = require('../../../teste.json')

class UserController {
  async showAllUsers(req: Request, res: Response) {
    const repository = getRepository(User);

    const users = await repository.find();

    return res.status(200).json(users);
  }

  async teste(req: Request, res: Response) {
    const data = req.body.data;
    const parserData = JSON.parse(data)
    for(let i=0;i<Object.keys(parserData).length;i++) {
      // if (parserData[Object.keys(parserData)[i]].ID_DESEMBOLSO!==null) {
      //   console.log({
      //     ID_DESEMBOLSO: String(parserData[Object.keys(parserData)[i]].ID_DESEMBOLSO)+'.0',
      //     NR_CONVENIO: String(parserData[Object.keys(parserData)[i]].NR_CONVENIO),
      //     DATA_DESEMBOLSO: parserData[Object.keys(parserData)[i]].DATA_DESEMBOLSO,
      //     VL_DESEMBOLSADO: parserData[Object.keys(parserData)[i]].VL_DESEMBOLSADO
      //   })
      // }
      // console.log({
      //   NR_CONVENIO: String(parserData[Object.keys(parserData)[i]].NR_CONVENIO),
      //   DATA_CADASTRO: parserData[Object.keys(parserData)[i]].DATA_CADASTRO,
      //   TIPO_RECURSO_DESBLOQUEIO: parserData[Object.keys(parserData)[i]].TIPO_RECURSO_DESBLOQUEIO,
      //   VL_TOTAL_DESBLOQUEIO: parserData[Object.keys(parserData)[i]].VL_DESBLOQUEADO
      // })
      // console.log({
      //   NR_MOV_FIN: String(parserData[Object.keys(parserData)[i]].NR_MOV_FIN),
      //   NR_CONVENIO: String(parserData[Object.keys(parserData)[i]].NR_CONVENIO),
      //   IDENTIF_FORNECEDOR: parserData[Object.keys(parserData)[i]].IDENTIF_FORNECEDOR,
      //   NOME_FORNECEDOR: parserData[Object.keys(parserData)[i]].NOME_FORNECEDOR,
      //   DATA_PAG: parserData[Object.keys(parserData)[i]].DATA_PAG,
      //   VL_PAGO: parserData[Object.keys(parserData)[i]].VL_PAGO,
      // })
      // console.log({
      //   NR_CONVENIO: String(parserData[Object.keys(parserData)[i]].NR_CONVENIO)+'.0', 
      //   ID_PROPOSTA: String(parserData[Object.keys(parserData)[i]].ID_PROPOSTA)+'.0', 
      //   SIT_CONVENIO: parserData[Object.keys(parserData)[i]].SIT_CONVENIO,
      //   IND_OPERA_OBTV: parserData[Object.keys(parserData)[i]].IND_OPERA_OBTV,
      //   DIA_INIC_VIGENC_CONV: parserData[Object.keys(parserData)[i]].DIA_INIC_VIGENC_CONV,
      //   DIA_FIM_VIGENC_CONV: parserData[Object.keys(parserData)[i]].DIA_FIM_VIGENC_CONV,
      //   DIA_LIMITE_PREST_CONTAS: parserData[Object.keys(parserData)[i]].DIA_LIMITE_PREST_CONTAS,
      //   DATA_SUSPENSIVA: parserData[Object.keys(parserData)[i]].DATA_SUSPENSIVA,
      //   DATA_RETIRADA_SUSPENSIVA: parserData[Object.keys(parserData)[i]].DATA_RETIRADA_SUSPENSIVA,
      //   SITUACAO_CONTRATACAO: parserData[Object.keys(parserData)[i]].SITUACAO_CONTRATACAO,
      //   MOTIVO_SUSPENSAO: parserData[Object.keys(parserData)[i]].MOTIVO_SUSPENSAO,
      //   VL_GLOBAL_CONV: parserData[Object.keys(parserData)[i]].VL_GLOBAL_CONV,
      //   VL_REPASSE_CONV: parserData[Object.keys(parserData)[i]].VL_REPASSE_CONV,
      //   VL_CONTRAPARTIDA_CONV: parserData[Object.keys(parserData)[i]].VL_CONTRAPARTIDA_CONV,
      //   VL_EMPENHADO_CONV: parserData[Object.keys(parserData)[i]].VL_EMPENHADO_CONV,
      //   VL_DESEMBOLSADO_CONV: parserData[Object.keys(parserData)[i]].VL_DESEMBOLSADO_CONV,
      //   VL_INGRESSO_CONTRAPARTIDA: parserData[Object.keys(parserData)[i]].VL_INGRESSO_CONTRAPARTIDA,
      //   VL_SALDO_CONTA: parserData[Object.keys(parserData)[i]].VL_SALDO_CONTA,
      //   DIA_ASSIN_CONV: parserData[Object.keys(parserData)[i]].DIA_ASSIN_CONV,
      //   MUNIC_PROPONENTE: parserData[Object.keys(parserData)[i]].MUNIC_PROPONENTE,
      //   DESC_ORGAO_SUP: parserData[Object.keys(parserData)[i]].DESC_ORGAO_SUP,
      //   MODALIDADE: parserData[Object.keys(parserData)[i]].MODALIDADE,
      //   NM_BANCO: parserData[Object.keys(parserData)[i]].NM_BANCO,
      //   SITUACAO_CONTA: parserData[Object.keys(parserData)[i]].SITUACAO_CONTA,
      //   SITUACAO_PROJETO_BASICO: parserData[Object.keys(parserData)[i]].SITUACAO_PROJETO_BASICO,
      //   OBJETO_PROPOSTA: parserData[Object.keys(parserData)[i]].OBJETO_PROPOSTA,
      //   IDENTIF_PROPONENTE: String(parserData[Object.keys(parserData)[i]].IDENTIF_PROPONENTE)+'.0',
      //   UF_PROPONENTE: parserData[Object.keys(parserData)[i]].UF_PROPONENTE,
      //   DIA_PROPOSTA: parserData[Object.keys(parserData)[i]].DIA_PROPOSTA,
      //   CEP_PROPONENTE: String(parserData[Object.keys(parserData)[i]].CEP_PROPONENTE)+'.0',
      //   ENDERECO_PROPONENTE: parserData[Object.keys(parserData)[i]].ENDERECO_PROPONENTE,
      //   BAIRRO_PROPONENTE: parserData[Object.keys(parserData)[i]].BAIRRO_PROPONENTE,
      //   SIT_PROPOSTA: parserData[Object.keys(parserData)[i]].SIT_PROPOSTA,
      //   DIA_INIC_VIGENCIA_PROPOSTA: parserData[Object.keys(parserData)[i]].DIA_INIC_VIGENCIA_PROPOSTA,
      //   DIA_FIM_VIGENCIA_PROPOSTA: parserData[Object.keys(parserData)[i]].DIA_FIM_VIGENCIA_PROPOSTA,
      //   VL_GLOBAL_PROP: parserData[Object.keys(parserData)[i]].VL_GLOBAL_PROP,
      //   VL_REPASSE_PROP: parserData[Object.keys(parserData)[i]].VL_REPASSE_PROP,
      //   VL_CONTRAPARTIDA_PROP: parserData[Object.keys(parserData)[i]].VL_CONTRAPARTIDA_PROP,
      //   NR_PROPOSTA: parserData[Object.keys(parserData)[i]].NR_PROPOSTA,
      //   NR_EMENDA: String(parserData[Object.keys(parserData)[i]].NR_EMENDA)+'.0',
      //   NOME_PARLAMENTAR: parserData[Object.keys(parserData)[i]].NOME_PARLAMENTAR,
      //   IND_IMPOSITIVO: parserData[Object.keys(parserData)[i]].IND_IMPOSITIVO,
      //   TIPO_PARLAMENTAR: parserData[Object.keys(parserData)[i]].TIPO_PARLAMENTAR,
      //   VALOR_REPASSE_EMENDA: parserData[Object.keys(parserData)[i]].VALOR_REPASSE_EMENDA,
      //   ID_PROGRAMA: String(parserData[Object.keys(parserData)[i]].ID_PROGRAMA)+'.0',
      //   NOME_PROGRAMA: parserData[Object.keys(parserData)[i]].NOME_PROGRAMA,
      //   SIT_PROGRAMA: parserData[Object.keys(parserData)[i]].SIT_PROGRAMA,
      //   DATA_DISPONIBILIZACAO: parserData[Object.keys(parserData)[i]].DATA_DISPONIBILIZACAO,
      //   DT_PROG_FIM_RECEB_PROP: parserData[Object.keys(parserData)[i]].DT_PROG_FIM_RECEB_PROP,
      //   MODALIDADE_PROGRAMA: parserData[Object.keys(parserData)[i]].MODALIDADE_PROGRAMA,
      //   UF_PROGRAMA: parserData[Object.keys(parserData)[i]].UF_PROGRAMA
      // })
    }

    res.sendStatus(201);
  }

  async show(req: Request, res: Response) {
    // const repository = getRepository(User);
    const { datas, toFind } = req.body;

    function addDays(date: Date) {
      var current_date = new Date(date.valueOf());
      current_date.setDate(current_date.getDate() + 1);
      return current_date;
    }
    
    function getDates(startDate: Date, stopDate: Date): dateArrayProps {
      var dateArray: dateArrayProps = {datas: []};
      while (startDate <= stopDate) {
          dateArray.datas.push({date: new Date (startDate).toLocaleDateString()});
          startDate = addDays(startDate);
      }
      return dateArray;
    }

    const filteredDates = getDates(new Date(
          Number(datas[0].split('/')[2]),
          Number(datas[0].split('/')[1]) - 1,
          Number(datas[0].split('/')[0])
        ), new Date(
          Number(datas[1].split('/')[2]),
          Number(datas[1].split('/')[1]) - 1,
          Number(datas[1].split('/')[0])
        )).datas

    // const users = await repository.find({
    //   where: 
    //     getDates(new Date(
    //     Number(datas[0].split('/')[2]),
    //     Number(datas[0].split('/')[1]) - 1,
    //     Number(datas[0].split('/')[0])
    //   ), new Date(
    //     Number(datas[1].split('/')[2]),
    //     Number(datas[1].split('/')[1]) - 1,
    //     Number(datas[1].split('/')[0])
    //   )).datas,
    // })

    const users = await getRepository(User).createQueryBuilder("user").where("LOWER(user.description) like LOWER(:description)", { description:`%${toFind}%` }).getMany();
    const usesrsFilteredPerDate: User[] = [];

    for (let i = 0; i < filteredDates.length; i++) {
      for (let g = 0; g < users.length; g++) {
        if (users[g].date === filteredDates[i].date) {
          usesrsFilteredPerDate.push(users[g]);
        };
      };
    };

    return res.json(
      usesrsFilteredPerDate
    );
  };

  async create(req: Request, res: Response) {
    const repository = getRepository(User);
    const { page_name, description, date, test_column } = req.body;

    // const userExists = await repository.findOne({ where: { username } });

    // if (userExists) {
    //   return res.sendStatus(409);
    // };

    const user = repository.create({ 
        page_name, 
        description,
        date,
        test_column
      });

    await repository.save(user);

    return res.json(user);
  };

  async delete(req: Request, res: Response) {
    const repository = getRepository(User);
    const { id } = req.body;

    const userExists = await repository.findOne({ where: { id } });

    if (!userExists) {
      return res.sendStatus(401);
    }

    await repository.delete(userExists);

    return res.json(userExists);
  };
};

export default new UserController();
