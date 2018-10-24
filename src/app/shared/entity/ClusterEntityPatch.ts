// Patch object definitions for ClusterEntity.
// Please note that these objects do not have to contain all the fields of equivalent classes.

export class ClusterEntityPatch {
  id?: string;
  name?: string;
  spec?: ClusterSpecPatch;
}

export class ClusterSpecPatch {
  cloud?: CloudSpecPatch;
  version?: string;
}

export class CloudSpecPatch {
  digitalocean?: DigitaloceanCloudSpecPatch;
  aws?: AWSCloudSpecPatch;
  openstack?: OpenstackCloudSpecPatch;
  vsphere?: VSphereCloudSpecPatch;
  hetzner?: HetznerCloudSpecPatch;
  azure?: AzureCloudSpecPatch;
}

export class DigitaloceanCloudSpecPatch {
  token?: string;
}

export class OpenstackCloudSpecPatch {
  username?: string;
  password?: string;
}

export class HetznerCloudSpecPatch {
  token?: string;
}

export class AWSCloudSpecPatch {
  accessKeyId?: string;
  secretAccessKey?: string;
}

export class AzureCloudSpecPatch {
  clientID?: string;
  clientSecret?: string;
  subscriptionID?: string;
  tenantID?: string;
}

export class VSphereCloudSpecPatch {
  username?: string;
  password?: string;
}