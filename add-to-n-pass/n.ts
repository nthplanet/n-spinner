import { gql, GraphQLClient } from "graphql-request";
import { IERC721Enumerable } from "../../tasks/dependencies/IERC721Enumerable";
import { IN, NDerivative } from "../../typechain";
import { getNGraphUrl } from "../utils/network";

export type SubgraphN = {
  id: string;
  metadataURI: string;
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
  sixth: string;
  seventh: string;
  eighth: string;
};

const N_FRAGMENT = `
  id
  owner
  name
  first
  second
  third
  fourth
  fifth
  sixth
  seventh
  eighth
  numbers
  metadataURI
`;

type GetNResponse = {
  n: SubgraphN;
};

export async function getNById(tokenId: number): Promise<SubgraphN | undefined> {
  const query = gql`
      query getNById($tokenId: Int!) {
          n(id: $tokenId) {
              ${N_FRAGMENT}
          }
      }
  `;
  const variables = {
    tokenId,
  };
  const client = new GraphQLClient(getNGraphUrl());
  const data = await client.request<GetNResponse>(query, variables);
  return data?.n;
}

type ListNResponse = {
  ns: Array<SubgraphN>;
};

export async function getNsByOwnerWithGraph(walletAddress: string): Promise<Array<SubgraphN>> {
  const query = gql`
      query getNsByOwner($owner: String!) {
          ns(where: { owner: $owner }) {
              ${N_FRAGMENT}
          }
      }
  `;
  const variables = {
    owner: walletAddress,
  };
  const client = new GraphQLClient(getNGraphUrl());
  const data = await client.request<ListNResponse>(query, variables);
  return data?.ns ?? [];
}

export async function getNsByOwnerWithContract(walletAddress: string, contract: IN): Promise<Array<SubgraphN>> {
  const balance = (await contract.balanceOf(walletAddress)).toNumber();
  const result = [];
  for (let i = 0; i < balance; i++) {
    const id = (await contract.tokenOfOwnerByIndex(walletAddress, i)).toString();
    const first = (await contract.getFirst(id)).toString();
    const second = (await contract.getSecond(id)).toString();
    const third = (await contract.getThird(id)).toString();
    const fourth = (await contract.getFourth(id)).toString();
    const fifth = (await contract.getFifth(id)).toString();
    const sixth = (await contract.getSixth(id)).toString();
    const seventh = (await contract.getSeventh(id)).toString();
    const eighth = (await contract.getEight(id)).toString();
    result.push({
      id,
      metadataURI: await contract.tokenURI(id),
      first,
      second,
      third,
      fourth,
      fifth,
      sixth,
      seventh,
      eighth
    });
  }
  return result;
}
