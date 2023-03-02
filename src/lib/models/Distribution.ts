import Config from "$lib/config";

interface DistributionSettings {
  allowDependencies: boolean;
  allowSiblings: boolean
}

export class Distribution implements DistributionSettings {
  public allowDependencies = Config.Distribution.allowDependencies;
  public allowSiblings = Config.Distribution.allowSiblings;
}